import React from "react";
import { renderToString } from 'react-dom/server'
import App from '../App'
import Log from '../Icons/logo.ico'
import Najar from '../Icons/jx.png'




export default function Render() {

  const User = renderToString(
    <App />
  )

  const html = `
  <!DOCTYPE html>
<html lang="ar" class="ar">
<head>
<title>نجار - للديكور الخشبي</title>  
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">   
<meta property="og:image" content=${Najar}  />
<meta property="og:image:url"  content=${Najar}  />
<meta property="twitter:image" content=${Najar}  />
<meta property="og:title" content='نجار - للديكور الخشبي' />
      <meta property="og:image" content=${Najar}/>
      <meta
        property="og:url"
        content='/' 
      />
      <meta name="theme-color" content="#d8bc64" />
      <meta name="description" content=" نحن فريق من الحرفيين المهرة والمتخصصين في فن النجارة. نقدم خدمات الأثاث المخصص، تجديد المطابخ والحمامات،وتواصل معنا لتحويل أفكارك إلى واقع ملموس">
      <meta name="og:description" content=" نحن فريق من الحرفيين المهرة والمتخصصين في فن النجارة. نقدم خدمات الأثاث المخصص، تجديد المطابخ والحمامات،وتواصل معنا لتحويل أفكارك إلى واقع ملموس">
      
      <meta name="keywords" content="نجار تفصيل غرف نوم، نجار تصنيع أثاث، نجار خشب طاولات، نجار فك وتركيب، نجار تصنيع أبواب، تصميم وتنفيذ غرف نوم، تصنيع أبواب ونوافذ مخصصة">


      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content=${Najar} />
      <meta name="twitter:site" content='نجار' />
      <meta property='og:type' content='' />

      <link rel="icon" href=${Log} />
    <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@900&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="/css/main.css" />
    <link rel="canonical" href="/" />
</head>
<body>
    <div id="Mahmoud-Almadhoun+467098520">
         ${User}
    </div>
    <script src="./client/bundle.js" defer ></script>
    
</body>
</html>
  `



  return html

}