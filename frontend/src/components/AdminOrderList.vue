<template>
    <div class="wrapper">
        <h2 class="header">ORDERS</h2>
        <article>
            <section class="inProgress">
                <div class="status">
                    <h5>IN PROGRESS</h5><div class="line"></div>
                </div>
                <div class="order" v-for="(order, index) in orders.inProcess" :key="index">
                    <div class="orderInfo">  
                        <h2>ORDER ID: {{ order._id }}</h2>
                        <h2>ORDER VALUE: {{ order.orderValue }} SEK</h2>
                    </div>
                    <ul>
                        <li v-for="(items, index) in order.items" :key="index">
                            <img
                            class="history-img-preview"
                            :src="require(`../assets/${items.imgFile}`)"
                            alt="..."
                            />
                            <h2 class="item-title">{{ items.title }}</h2>
                            <p class="item-price">{{ items.price }} <span>SEK</span></p>
                            <p>{{ items.amount }}<span class="amount">st</span></p>
                            <p class="item-title itemId">{{ items._id }}</p>
                        </li>
                    </ul>
                </div>
            </section>
        </article>
        <article>
            <section class="done">
                <div class="status">
                    <h5>Done</h5><div class="line"></div>
                </div>
                <div class="order" v-for="(order, index) in orders.done" :key="index">
                    <div class="orderInfo">
                        <h2>ORDER ID: {{ order._id }}</h2>
                        <h2>ORDER VALUE: {{ order.orderValue }} SEK</h2>
                    </div>
                    <ul>
                        <li v-for="(items, index) in order.items" :key="index">
                            <img
                            class="history-img-preview"
                            :src="require(`../assets/${items.imgFile}`)"
                            alt="..."
                            />
                            <h2 class="item-title">{{ items.title }}</h2>
                            <p class="item-price">{{ items.price }} <span>SEK</span></p>
                            <p>{{ items.amount }}<span class="amount">st</span></p>
                            <p class="item-title itemId">{{ items._id }}</p>
                        </li>
                    </ul>
                </div>
            </section>
        </article>
    </div>
</template>

<script>
export default {
    created() {
        let orders = this.$store.getters.getHistoryOrders;
        if (orders !== null) {
            console.log(orders)
            orders.forEach(order => {
                if(order.status === 'inProcess') {
                    this.orders.inProcess.push(order)
                } else if(order.status === 'done') {
                    this.orders.done.push(order)
                }
            console.log(this.orders.inProcess)
            });
        }
    },
    data() {
        return {
            showOrder: false,
            orders: {
                inProcess: [],
                done: [],
            }
        }
    }
}
</script>

<style scoped lang="scss">

    .wrapper {

        .header {
            margin-top: 80px;
            text-align: start;
        }
    }

    article {
        text-align: start;
        display: flex;
        flex-direction: column;

        .status {
            display: flex;
            align-items: center;
            gap: 16px;
            h5 {
                white-space: nowrap;
            }
            .line {
                height: 2px;
                width: 100%;
                background-color: black;
            }
        }

        .order {
            background-color: white;
            border-radius: 5px;
            padding: 16px;
            margin-bottom: 32px;
            
            .orderInfo {
                display: flex;
                justify-content: space-between;
                color: lightgrey
            }

            .history-img-preview {
                width: 60px;
                height: 60px;
            }

            li:nth-child(odd) {
                background: lightgrey;
            }

            li {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                /* justify-items: center; */
            }

            ul {
                padding: 0;
                list-style: none;
            }
            .amount {
                font-size: 14px;
                text-transform: lowercase;
            }
            .itemId{
                justify-self: end;
                padding-right: 16px;
            }
        }
    }
</style>