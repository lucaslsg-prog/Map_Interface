function initMap() {
    const position_gateway = {
        lat: -3.08793016,
        lng: -59.96295106
    };
    const position_node1 = {
        lat: -3.088281,
        lng: -59.962747
    };
    const position_node2 = {
        lat: -3.087910,
        lng: -59.963283
    };
    const position_node3 = {
        lat: -3.087605,
        lng:  -59.962932
    };

    const mapOptions = {
      zoom: 18,
      center: position_gateway
    };

    const map = new google.maps.Map(
      document.getElementById("map"),
      mapOptions
    );

    
    const gateway = new google.maps.Marker({ position: position_gateway, map,label:'LoRa Gateway'});
    const node_ufam_01 = new google.maps.Marker({ position: position_node1, map,label:'node-ufam-01',animation: google.maps.Animation.DROP});
    const node_ufam_02 = new google.maps.Marker({ position: position_node2, map,label:'ufam-modem-01',animation: google.maps.Animation.DROP});
    const node_ufam_03 = new google.maps.Marker({ position :position_node3, map,label:'ufam-modem-02',animation: google.maps.Animation.DROP});


    node_ufam_01.addListener('click', toggleBounce1);//evento seria uplink
    node_ufam_02.addListener('click', toggleBounce2);
    node_ufam_03.addListener('click', toggleBounce3);
    

      function toggleBounce1() {

        //animação para node 1 interagir com o click
        if (node_ufam_01.getAnimation() !== null) {//condição seria payload diferente de vazio
            node_ufam_01.setAnimation(null);
        } else {
          node_ufam_01.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    function toggleBounce2(){

        //animação para node 2 interagir com o click
        if (node_ufam_02.getAnimation() !== null) {//condição seria payload diferente de vazio
            node_ufam_02.setAnimation(null);
        } else {
            node_ufam_02.setAnimation(google.maps.Animation.BOUNCE);
            
        }
    }
        
    function toggleBounce3(){

         //animação para node 3 interagir com o click
         if (node_ufam_03.getAnimation() !== null) {//condição seria payload diferente de vazio
            node_ufam_03.setAnimation(null);
        } else {
            node_ufam_03.setAnimation(google.maps.Animation.BOUNCE);
           
        }
    }
       
      
  }