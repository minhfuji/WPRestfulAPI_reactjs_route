This is advanced version from github.com/minhfuji/WPRestfulAPI_reactjs, apply React Route

# Backend

Install Wordpress, please be sure rewrite mode  is ON and wp .htacess is acceptable with apache

Input some sample content , some sample category

Expect after your installation, you have accessible URL http://localhost/wordpress 

# Frontend 

Run to install node
```
npm install
```

Edit file /src/Apis.js , change

```
export const SITE_INFO = 'https://wordpress.org/news/wp-json/'
```

Into

```
export const SITE_INFO = 'https://localhost/wordpress/wp-json/'
```

If don’t change SITE_INFO, the data will be loaded from wordpress news ( wordpress.org )

Open index.html with web browser to see the demo

### Run localhost on node
```
npm start
```
### Or webpack it to public folder
```
npm run build 
```

## Screenshot

![screenshot WPRestAPI](https://raw.githubusercontent.com/minhfuji/WPRestfulAPI_html/master/screenshot.png)
