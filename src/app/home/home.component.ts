import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  // https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyA2I1ffgLOfWLpD9dugs5O7hTQl9GXJEJs
  videos: any[] = [];
  totalItems!: number;
  currentPage: number = 1;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.searchVideos();
  }




  searchVideos() {
    
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=50&key=AIzaSyA2I1ffgLOfWLpD9dugs5O7hTQl9GXJEJs`;
      // const url = `https://www.googleapis.com/youtube/v3/search?key=YOUR_API_KEY&q=${this.searchQuery}&type=video&maxResults=10`;
      // https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyA2I1ffgLOfWLpD9dugs5O7hTQl9GXJEJs

      this.http.get(url).subscribe((res: any) => {
      this.videos = res.items;
      this.totalItems = this.videos.length; // Update the totalItems property
      this.currentPage = 1; // Reset the current page to the first page
    });
    
  }
  


  
  
  





}
