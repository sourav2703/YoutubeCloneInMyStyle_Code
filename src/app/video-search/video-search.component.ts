import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.css']
})
export class VideoSearchComponent {
  constructor(private http: HttpClient) {}
  
  searchQuery!: string;
  videos: any[] = []; // Array to store videos
  pageSize = 15; // Number of items per page
  currentPage = 1; // Current page index
  totalItems!: number; // Total number of items


  // ...

  searchVideos() {
    if (this.searchQuery.trim() !== '') {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.searchQuery}&type=video&maxResults=100&key=hs`;
      // const url = `https://www.googleapis.com/youtube/v3/search?key=YOUR_API_KEY&q=${this.searchQuery}&type=video&maxResults=10`;
      // AIzaSyA2I1ffgLOfWLpD9dugs5O7hTQl9GXJEJs

      this.http.get(url).subscribe((res: any) => {
        this.videos = res.items;
        this.totalItems = this.videos.length; // Update the totalItems property
        this.currentPage = 1; // Reset the current page to the first page
        console.log(res);
      });
      this.currentPage = 1;
    }
  }
  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  getPaginatedVideos(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.videos.slice(startIndex, endIndex);
  }
  
  
  







}
