import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fa" dir='rtl'>
        <Head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
          <meta name="author" content="امیرحسین مبشری" />
          <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" rel="stylesheet" type="text/css" />
          <link href="https://db.onlinewebfonts.com/c/c56ea8aca8b3b1f84bcb7365c6ae4af0?family=Kalameh+Bold" rel="stylesheet"></link>
          <link rel="icon" href="" />
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
