import Layout from "../constants/layout";
import "../shared/styles/globals.css";

// REDUX
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { createStore } from "redux";
import store from "../redux/store";
import { createWrapper } from "next-redux-wrapper";

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />{" "}
            </Layout>{" "}
        </Provider>
    );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
