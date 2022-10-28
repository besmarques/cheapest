const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			dataAuchan: null,
			dataContinente: null,
			dataMinipreco: null,
		},
		actions: {
			searchAuchan: async (terms) => {
				const store = getStore();

				const opts = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
					},
				};

				const response = await fetch(
					`${process.env.BACKEND_URL}/api/auchan/${terms}`,
					opts
				);

				const data = await response.json();
				console.log("data" + data);

				if (response.status == 200) {
					setStore({ dataAuchan: data });
				} else {
					setStore({ dataAuchan: "error" });
				}
			},
			searchContinente: async (terms) => {
					const store = getStore();
	
					const opts = {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							"Access-Control-Allow-Origin": "*",
						},
					};
	
					const response = await fetch(
						`${process.env.BACKEND_URL}/api/continente/${terms}`,
						opts
					);
	
					const data = await response.json();
					console.log("data" + data);
	
					if (response.status == 200) {
						setStore({ dataContinente: data });
					} else {
						setStore({ dataContinente: "error" });
					}
			},
			searchMinipreco: async (terms) => {
				const store = getStore();

				const opts = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
					},
				};

				const response = await fetch(
					`${process.env.BACKEND_URL}/api/minipreco/${terms}`,
					opts
				);

				const data = await response.json();
				console.log("data" + data);

				if (response.status == 200) {
					setStore({ dataMinipreco: data });
				} else {
					setStore({ dataMinipreco: "error" });
				}
		},
		},
	};
};

export default getState;
