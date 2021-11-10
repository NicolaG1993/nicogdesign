import Layout from "../constants/layout";
import "../shared/styles/globals.css";

// REDUX
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { createStore } from "redux";
import store from "../redux/store";
import { createWrapper } from "next-redux-wrapper";

function MyApp({ Component, pageProps }) {
    const underDevelopment = true;

    return (
        <Provider store={store}>
            {underDevelopment ? (
                <div id="WIP">
                    <div>
                        <h1>WORK IN PROGRESS</h1>
                        <h3>Developer at work</h3>
                    </div>

                    <p>
                        <a href="mailto:nicog.designer@gmail.com">
                            nicog.designer@gmail.com
                        </a>
                    </p>
                </div>
            ) : (
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            )}
        </Provider>
    );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
