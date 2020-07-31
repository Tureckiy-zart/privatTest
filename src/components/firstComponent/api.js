import axios from "axios";
const merch = "2xfWen7fkf1SpT6Ex1r0DM9Xh9h4ruj2";
const id = 164617;
const pass = "iRmO4njbxlS0Hn4c6XVb5K1WSbio3B0O";
const cardnum = 5168755444587899;

const url = "https://api.privatbank.ua/p24api/balance";
var config = {
  headers: { "Content-Type": "text/xml" },
};
const request = `<?xml version="1.0" encoding="UTF-8"?>
<request version="1.0">
    <merchant>
        <id>${id}</id>
        <signature>${merch}</signature>
    </merchant>
    <data>
        <oper>cmt</oper>
        <wait>0</wait>
        <test>0</test>
        <payment id="">
        <prop name="cardnum" value=${cardnum} />
        <prop name="country" value="UA" />
        </payment>
    </data>
</request>
`;
export const data = axios.post(url, request, config).then(console.log)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
