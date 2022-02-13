const axios = require('axios')
const cheerio = require('cheerio');
const { response } = require('express');
const express = require('express')

const PORT = 8000;
const app = express()

const url = 'https://www.empirediscount.net/toys-just-in/?sort=newest&limit=100&mode=6'

axios(url).then(response => {
    const html = response.data
    console.log(html)
    const $ = cheerio.load(html)
    const products = []

    $('.product', html).each(function () {
        const Name = title[18].replace(/^\s+|\s+$/g, "")
        const Price = title[21].replace(/^\s+|\s+$/g, "")
        const Brand = title[16].replace(/^\s+|\s+$/g, "")
        const url = $(this).find('a').attr('href')

        products.push({
            Name,
            Brand,
            Price,
            url
        })

        app.get("/", (req, res) => {

            let data = {
                name: title,
                url: url
            }

            res.send(data);
        });
    })

    console.log(products)
}).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server is running on ${PORT}`));