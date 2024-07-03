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
          {/* <link href="https://db.onlinewebfonts.com/c/c56ea8aca8b3b1f84bcb7365c6ae4af0?family=Kalameh+Bold" rel="stylesheet"></link> */}
          <link rel="icon" href="" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz4fnFO9gybBogGz1q58rP1p0i7jL2y0uYw7rxUefF4Ec3B3cwR7r2eK8z" crossOrigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" integrity="sha384-ho+pP0RAhpGx8BQCSNxmE8fUJ7ubE41gAPrUbS5d6knrM6QxjvoSXmr73jD8r7iD" crossOrigin="anonymous"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
