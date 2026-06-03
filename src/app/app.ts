import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
import { Carousel } from './components/carousel/carousel';
import { Body } from './components/body/body';
import { Footer } from './components/footer/footer';
import { Databinding } from './components/databinding/databinding';
import { Assignment } from './components/assignment/assignment';
import { Assignment2 } from "./components/assignment2/assignment2";


@Component({
  selector: 'app-root',
  imports: [
    Navbar, Header, Carousel, Body, Footer, Assignment,
    Assignment2,RouterOutlet
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project1');
}
