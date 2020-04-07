import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
    render() {
        return (
            <Html leng="en">
                <Head>
                    <meta charSet="utf-8" />
                    <title>Duc Lux</title>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                        crossorigin="anonymous"
                    />
                    <link rel="stylesheet" href="/static/css/style.css"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
