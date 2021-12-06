import Order from '@/classes/Order'
import { setAuthHeader, showPopUp } from '@/utils'
import { Client } from '@stomp/stompjs'
import axios from 'axios'

export default class OrderDataService {
  static API_URL = process.env.VUE_APP_PROXY_URL;

  public static async getAllOrders(): Promise<Order[]> {
    const response = await axios.get(`${this.API_URL}/order/`, setAuthHeader())
    return response.data
  }

  public static async createOrder(order: Order) {
    return await axios.post(`${this.API_URL}/order/`, order)
  }

  //   public static async approveOrder(dish: Dish) {
  //     const token = computed(() => store.state.apiToken)
  //     await axios.put(`${this.API_URL}/dish/${dish.id}`, dish, {
  //       headers: { Authorization: `Bearer ${token.value}`}
  //     })
  //       .then(() => showPopUp(`Updated ${dish.name}`, false))
  //       .catch(() => showPopUp(`Was unable to update ${dish.name}`, true))
  //   }

  //   public static async deleteOrderById(dish: Dish) {
  //     const token = computed(() => store.state.apiToken)
  //     await axios.delete(`${this.API_URL}/dish/${dish.id}`, {
  //       headers: { Authorization: `Bearer ${token.value}`}
  //     })
  //       .then(() => showPopUp(`Deleted ${dish.name}`, false))
  //       .catch(() => showPopUp(`Was unable to delete ${dish.name}`, true))
  //   }

  //   public static async removeOrdersBySessionId(dish: Dish) {
  //     const token = computed(() => store.state.apiToken)
  //     await axios.delete(`${this.API_URL}/dish/${dish.id}`, {
  //       headers: { Authorization: `Bearer ${token.value}`}
  //     })
  //       .then(() => showPopUp(`Deleted ${dish.name}`, false))
  //       .catch(() => showPopUp(`Was unable to delete ${dish.name}`, true))
  //   }
}
