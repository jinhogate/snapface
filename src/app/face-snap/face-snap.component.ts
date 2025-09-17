import { Component, Input, OnInit } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import {
  DatePipe,
  LowerCasePipe,
  NgClass,
  NgStyle,
  TitleCasePipe,
  UpperCasePipe,
} from "@angular/common";
import { FaceSnapsService } from "../services/face-snaps.service";

@Component({
  selector: "app-face-snap",
  imports: [NgStyle, NgClass, TitleCasePipe, DatePipe],
  templateUrl: "./face-snap.component.html",
  styleUrl: "./face-snap.component.scss",
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  isSnapped!: boolean;
  nomBouton!: string;

  constructor(private faceSnapService: FaceSnapsService) {}

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
    this.nomBouton = "Oops, unSnap!";
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id);
  }

  snap() {
    this.nomBouton = "Oh Snap!";
    this.faceSnap.removeSnap();
  }
}
