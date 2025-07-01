import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import ConnectDB from './Config/db.js';
import analyticsRoutes from "./Routes/Anaylytics.Route.js"




dotenv.config();


const app = express();


app.use(cors());
app.use(express.json());


ConnectDB();

app.get('/',(req,res)=>{
    return res.json({"message":"You are accessing the server"});
})


app.use('/api/analytics', analyticsRoutes);

app.get('/gtm-script', (req, res) => {
    const {
      w = 'window',
      d = 'document',
      s = 'script',
      l = 'dataLayer',
      i = 'GTM-XXXXXXX'
    } = req.query;
  
    const script = `
  <script>
  (function(${w},${d},${s},${l},${i}){${w}[${l}]=${w}[${l}]||[];${w}[${l}].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=${d}.getElementsByTagName(${s})[0],
  j=${d}.createElement(${s}),dl=${l}!='dataLayer'?'&l='+${l}:'';
  j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+${i}+dl;
  f.parentNode.insertBefore(j,f);
  })(${w},${d},${s},${l},'${i}');
  </script>`;
  
    res.send({ script });
  });
  
  app.post('/gtm-script', (req, res) => {
    const {
      w = 'window',
      d = 'document',
      s = 'script',
      l = 'dataLayer',
      i = 'GTM-XXXXXXX'
    } = req.body;
  
    const script = `
  <script>
  (function(${w},${d},${s},${l},${i}){${w}[${l}]=${w}[${l}]||[];${w}[${l}].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=${d}.getElementsByTagName(${s})[0],
  j=${d}.createElement(${s}),dl=${l}!='dataLayer'?'&l='+${l}:'';
  j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+${i}+dl;
  f.parentNode.insertBefore(j,f);
  })(${w},${d},${s},${l},'${i}');
  </script>`;
  
    res.send({ script });
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));