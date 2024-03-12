import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {

  @ViewChild('collapseDiv') collapseDiv;
  @ViewChild('markdownComponent') markdownComponent;
  @Input() githubRepositoryID: string;
  @Input() githubRepositoryBranch: string;
  @Input() githubRepositoryMetadata: any;
  @Input() stack: any;

  githubRepositoryUrl = ''
  githubRepositoryRawUrl = ''
  collapsed = true

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.githubRepositoryUrl = 'https://github.com/'+this.githubRepositoryID
    this.githubRepositoryRawUrl = 'https://raw.githubusercontent.com/'+this.githubRepositoryID+'/'+this.githubRepositoryBranch+'/'
  }

  fixImagesUrl(baseURI) {
    for(let img of this.markdownComponent.element.nativeElement.getElementsByTagName('img')) {
      img.src = img.src.replace(img.baseURI, baseURI)
    }
  }

  collapseButtonClick() {
    this.collapsed = !this.collapsed
  }

}
