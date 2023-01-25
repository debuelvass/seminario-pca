import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: 'intro.page.html',
  styleUrls: ['intro.page.scss'],
})

export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 1, //slide inicial (primero) [0,1,2,3]
    slidesPerView: 1, //configuramos un slide por vista
    centerSlides: true, //que las slides enten centradas
    speed: 400 //velocidad movimiento de los slides
  }

  slides = [
    {
      title: "Los libros digitales",
      subtitle: "Adopción de libros en este formato",
      img: "https://www.elcolombiano.com/documents/10157/0/580x555/0c63/580d365/none/11101/GOYJ/image_content_36467112_20201002193421.jpg",
      description: "El libro digital es el mejor invento que llegó, para hacerle su vida más facíl"
    },
    {
      title: "Librería Móvil",
      subtitle: "",
      img: "https://digital-content.co/wp-content/uploads/2021/10/ebook-7-24.png",
      description: "Somos la mejor app de libros digitales"
    },
    {
      title: "¿Por qué elegirnos?",
      subtitle: "Librería Móvil",
      img: "https://digital-content.co/wp-content/uploads/2021/10/ebook-7-24.png",
      description: "Aquí encontrará libros, revistas, obras de investigación, y más"
    }
  ]
  
  constructor(private router: Router, private storage: Storage) {}

  finish(){
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/menu/home");
  }
  ngOnInit() {
  }


}
