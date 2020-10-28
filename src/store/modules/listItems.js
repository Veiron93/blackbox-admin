const listItems = {
    namespaced: true,
    state: {
        selectedItemsList: []
    },
    mutations: {
        SELECTED_ITEMS : (state, {idItem}) => {
    
            let idx = state.selectedItemsList.indexOf(idItem)
                
            if (idx == -1) {
                state.selectedItemsList.push(idItem);
            }else{
                state.selectedItemsList.splice(idx, 1);
            }
        },
                
        RESET_SELECTED_ITEMS_LIST : (state) => {
            state.selectedItemsList = [];
        }
    },

    getters: {

    },
    actions: {
        
    }
}

export default listItems;