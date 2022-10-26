"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

import json

#crawler part
import requests # pip install requests

from bs4 import BeautifulSoup as bs # pip install beautifulsoup4

api = Blueprint('api', __name__)

@api.route('/auchan', methods=['POST', 'GET'])
def scrape_auchan():

    dic = []
   

    r = requests.get("https://www.auchan.pt/pt/pesquisa?q=arroz+carolino&search-button=&lang=pt_PT")

    soup = bs(r.content, "html.parser")

    products = soup.find_all("div", attrs=("product"))
    for product in products:
        title = product.find("h3")
        price = product.find("span", attrs=("value"))
        price_per_unit = product.find("span", attrs=("auc-measures--price-per-unit"))
        image = product.find("img", attrs=("tile-image"))

        dic.append({"title": title.text.strip().rstrip(),"price": price.text.strip().rstrip(), "price_per_unit": price_per_unit.text.strip().rstrip(),"images": image["data-src"],"where": "auchan"})
         
    json_data = json.dumps(dic,indent=4)

    return json_data, 200

@api.route('/continente', methods=['POST', 'GET'])
def scrape_continente():
    dic = []

    r = requests.get("https://www.continente.pt/pesquisa/?q=arroz+carolino&start=0&srule=Continente&pmin=0.01")

    soup = bs(r.content, "html.parser")

    products = soup.find_all("div", attrs=("product"))
    for product in products:
        title = product.find("a", attrs=("ct-tile--description"))
        brand = product.find("p", attrs=("ct-tile--brand"))
        quant = product.find("p", attrs=("ct-tile--quantity"))
        price = product.find("span", attrs=("ct-price-formatted"))
        unit = product.find("span", attrs=("ct-m-unit"))
        true_info = product.find("div", attrs=("ct-tile--price-secondary"))
        true_price = true_info.find("span", attrs=("ct-price-value"))
        true_unit = true_info.find("span", attrs=("ct-m-unit"))
        image = product.find("img", attrs=("ct-tile-image"))
        dic.append({"title": title.text.strip().rstrip(), "brand":brand.text.strip().rstrip(), "quant":quant.text.strip().rstrip(), "price":price.text.strip().rstrip(), "unit": unit.text.strip().rstrip(), "true_price": true_price.text.strip().rstrip(), "true_unit": true_unit.text.strip().rstrip(),"image": image["data-src"], "where": "continente" })

    json_data = json.dumps(dic,indent=4)
    return json_data, 200

@api.route('/mercadao', methods=['POST', 'GET'])
def scrape_mercadao():
    dic = []

    r = requests.get("https://mercadao.pt/store/pingo-doce/search?queries=arroz%20carolino")

    soup = bs(r.content, "html.parser")

    products = soup.find_all("pdo-product-item")
    for product in products:
        print(product)
        #details = product.find("div", attrs=("product-details"))
        #title = details.find("h3", attrs=("pdo-heading-s"))
        #print(products)
        #dic.append({"title": title.text.strip().rstrip()})

    json_data = json.dumps(dic,indent=4)
    return json_data, 200


@api.route('/minipreco', methods=['POST', 'GET'])
def scrape_minipreco():
    dic = []

    r = requests.get("https://www.minipreco.pt/search?text=arroz+carolino&x=0&y=0")

    soup = bs(r.content, "html.parser")

    products = soup.find_all("div", attrs=("product-list__item"))
    for product in products:
        title = product.find("span", attrs=("details"))
        price = product.find("p", attrs=("price"))
        priceperkg = product.find("p", attrs=("pricePerKilogram"))
        dic.append({"title": title.text.strip().rstrip(), "price": price.text.strip().rstrip(), "priceperkg":priceperkg.text.strip().rstrip()})

    json_data = json.dumps(dic,indent=4)
    return json_data, 200
