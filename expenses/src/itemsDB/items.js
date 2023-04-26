import {faChampagneGlasses, 
    faSquare, 
    faBurger, 
    faGlassWater, 
    faArrowDownLong, 
    faArrowUpLong, 
    faBriefcase, 
    faCommentDollar, 
    faSackDollar} from "@fortawesome/free-solid-svg-icons";
   
    export const classesList = {
      incoming:{
        bgColor:'light-incoming',
        color: 'incoming',
      },
      transfer:{
        bgColor:'light-transfer',
        color: 'transfer',
      },
      car:{
        bgColor:'light-car',
        color: 'car',
      },
      bizum:{
        bgColor:'light-bizum',
        color: 'bizum',
      },
      bill:{
        bgColor:'light-bill',
        color: 'bill',
      },
      electricity:{
        bgColor:'light-electricity',
        color: 'electricity',
      }
    };
    
    export const itemList = [
        {
          icons:[faSquare, faChampagneGlasses],
          classesList:classesList.bill,
          data: {
            title:'Food & Drinks',
            date: new Date("2022-08-24").toLocaleDateString()
          },
          money: {
            amount:20,
            income:false
          }
      },
        {
          icons:[faSquare, faBriefcase],
          classesList:classesList.incoming,
          data: {
            title:'Freelancing Work',
            date: new Date("2022-08-31").toLocaleDateString()
          },
          money: {
            amount:260,
            income:true
          }
      },
        {
          icons:[faSquare, faCommentDollar],
          classesList:classesList.bizum,
          data: {
            title:'Send Bizum to friend',
            date: new Date("2022-09-01").toLocaleDateString()
          },
          money: {
            amount:50,
            income:false
          }
      },
        {
          icons:[faSquare, faSackDollar],
          classesList:classesList.transfer,
          data: {
            title:'Payroll',
            date: new Date("2022-09-01").toLocaleDateString()
          },
          money: {
            amount:2500,
            income:true
          }
      }
      ];
   