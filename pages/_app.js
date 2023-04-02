import Layout from "@/constants/layout";
import "@/styles/globals.css";

// REDUX
// import withRedux from "next-redux-wrapper";
// import { createStore } from "redux";
// import { createWrapper } from "next-redux-wrapper";
import { Provider } from "react-redux";
import store from "@/redux/store";

function App({ Component, pageProps }) {
    const underDevelopment = false;

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

// const makeStore = () => store;
// const wrapper = createWrapper(makeStore);
export default App;
