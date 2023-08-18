import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  pics: any[] = [
    {
      url: "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Hijascs, Tommy - 2021",
      description: "Snow hills, also known as snow-covered hills or snow-clad hills, refer to elevated landforms covered with a layer of snow. These formations are created when cold weather conditions cause snowfall, and the snow accumulates on the slopes and crests of hills or mountains. Snow hills are a common sight in regions with cold climates, particularly during the winter months.",
    },
    {
      url: "https://images.pexels.com/photos/4585185/pexels-photo-4585185.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "ColorXS, Jimmy Ralph - 2020",
      description: "San Francisco is a vibrant and iconic city located on the west coast of the United States. It is known for its diverse culture, historic landmarks, stunning landscapes, and significant contributions to technology and innovation."
    },
    {
      url: "https://images.pexels.com/photos/2911521/pexels-photo-2911521.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Lasbocnic, Billy Jea - 2019",
      description: "Sicilia, known in English as Sicily, is the largest island in the Mediterranean Sea and an autonomous region of Italy. It is renowned for its rich history, diverse culture, stunning landscapes, and Mediterranean cuisine. "
    },
    {
      url: "https://images.pexels.com/photos/1570264/pexels-photo-1570264.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "WorkXpace, Lea Rold - 2012",
      description: ""
    },
    {
      url: "https://images.pexels.com/photos/3095769/pexels-photo-3095769.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "UrbaniX, Lea Rold - 2010",
      description: "Bangkok, the capital city of Thailand, is a bustling metropolis known for its vibrant street life, ornate temples, rich cultural heritage, and modern developments."
    }
  ]
}
