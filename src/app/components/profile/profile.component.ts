import { AnimationMetadataType } from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fileURLToPath } from 'node:url';
import { delay } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {



  public onMouseMove(e: MouseEvent) {


    const box = document.querySelector(".avatar") as HTMLElement;
    box?.addEventListener('mousemove', function (e: MouseEvent) {
      const boxRect = box.getBoundingClientRect();
      const offsetX = e.clientX - boxRect.left;
      const offsetY = e.clientY - boxRect.top;
      const centerX = boxRect.width / 2;
      const centerY = boxRect.height / 2;

      const rotateX = (centerY - offsetY) / 10;
      const rotateY = (offsetX - centerX) / 10;

      box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    } as EventListener);

  }

  public onMouseLeave(e: MouseEvent) {
    const box = document.querySelector(".avatar") as HTMLElement;
    box?.addEventListener('mouseleave', function (e: MouseEvent) {
     box.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`
    } as EventListener);
  }
}


