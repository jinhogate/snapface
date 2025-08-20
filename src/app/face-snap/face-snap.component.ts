import { Component, Input, OnInit } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { NgClass, NgStyle } from "@angular/common";

@Component({
  selector: "app-face-snap",
  imports: [NgStyle, NgClass],
  templateUrl: "./face-snap.component.html",
  styleUrl: "./face-snap.component.scss",
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  isSnapped!: boolean;
  nomBouton!: string;

  ngOnInit(): void {
    this.isSnapped = false;
    this.nomBouton = "Oh Snap!";
  }

  onSnap() {
    this.isSnapped = !this.isSnapped;
    if (this.isSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap() {
    this.nomBouton = "Oops, un Snap!";
    this.faceSnap.addSnap();
  }

  snap() {
    this.nomBouton = "Oh Snap!";
    this.faceSnap.removeSnap();
  }
}
