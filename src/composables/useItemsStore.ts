import { watch, reactive, ShallowReactive } from "vue"
import { ICardItem } from "../models"

let _state: ShallowReactive<{ 
  items: ICardItem[], 
  totals: {
    total: number
  }
}>

export const useItemsStore = () => {

  const recomputeTotals = (items: ICardItem[]) => {
    const total = items.map(o => o.currentValue as number).reduce((sum, num) => Number(sum) + Number(num))
    
    items.forEach(item => {
      item.percentOfTotal = Number((item.currentValue / total).toFixed(2))
    })

    _state.totals.total = Number(total.toFixed(2))
  }

  if (!_state) {
    _state = reactive(
      {
        items: [{
          id: 1,
          name: "Item 1",
          costBasis: 1987,
          currentValue: 2345.56,
          numberOfShares: 50,
          netGain: 0,
          percentOfTotal: 0
        }, {
          id: 2,
          name: "Item 2",
          costBasis: 342,
          currentValue: 513.4,
          numberOfShares: 50,
          netGain: 0,
          percentOfTotal: 0
        }, {
          id: 3,
          name: "Item 3",
          costBasis: 45,
          currentValue: 9765.3,
          numberOfShares: 50,
          netGain: 0,
          percentOfTotal: 0
        }],

        totals: {
          total: 0
        }
      }
    )
  }

  recomputeTotals(_state.items)

  watch(_state.items, (newItems) => {
    recomputeTotals(newItems)
  })

  const addItem = (item: ICardItem) => {
    const maxId = Math.max(..._state.items.map(o => o.id as number))
    item.id = maxId + 1;
    _state.items.push(item)
  }

  const updateItem = (updatedItem: ICardItem) => {
    const item = _state.items.find(item => item.id === updatedItem.id)
    if (item) {
      item.costBasis = updatedItem.costBasis
      item.currentValue = updatedItem.currentValue
      item.name = updatedItem.name
      item.numberOfShares = updatedItem.numberOfShares
    }
  }

  const updateItemValue = (params: { id: string | number, newValue: number }) => {
    const item = _state.items.find(item => item.id === params.id)
    if (item) {
      item.currentValue = params.newValue
      recomputeTotals(_state.items)
    }
  }

  return {
    state: _state,
    addItem,
    updateItem,
    updateItemValue
  }
}
