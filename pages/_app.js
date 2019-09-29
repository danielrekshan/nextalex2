import App from 'next/app';
// import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloProvider } from 'react-apollo';
import withApollo from '../lib/withApollo';

import HeaderContainer from '../containers/HeaderContainer';

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <HeaderContainer />
        <Component {...pageProps} />
        <p>TODO: Footer</p>

      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);