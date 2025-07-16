import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-face-snap",
  imports: [],
  templateUrl: "./face-snap.component.html",
  styleUrl: "./face-snap.component.scss",
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  image!: string;

  ngOnInit(): void {
    this.title = "Archibald";
    this.description = "Mon meilleur ami depuis toujours !";
    this.createdAt = new Date();
    this.snaps = 5;
    this.image =
      "https://images.pexels.com/photos/2113709/pexels-photo-2113709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  }
}
