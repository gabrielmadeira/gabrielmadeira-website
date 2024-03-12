import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  projectList = [
    {
      githubRepositoryID: "gabrielmadeira/ascii-art",
      githubRepositoryBranch: "main",
      githubRepositoryMetadata: { name: 'ascii-art' },
      stack: ['C++', 'Qt', 'OpenCV']
    },
    {
      githubRepositoryID: "gabrielmadeira/image-processing-app",
      githubRepositoryBranch: "main",
      githubRepositoryMetadata: { name: 'image-processing-app' },
      stack: ['C++', 'Qt', 'OpenCV']
    },
    {
      githubRepositoryID: "gabrielmadeira/INFinityDrive",
      githubRepositoryBranch: "main",
      githubRepositoryMetadata: { name: 'INFinityDrive' },
      stack: ['C++', 'TCP Sockets']
    },
    {
      githubRepositoryID: "gabrielmadeira/compiler-project",
      githubRepositoryBranch: "main",
      githubRepositoryMetadata: { name: 'compiler-project' },
      stack: ['C', 'Lex', 'Yacc', 'Assembly', 'Makefile']
    },
    {
      githubRepositoryID: "gabrielmadeira/academic-genealogy-rs",
      githubRepositoryBranch: "master",
      githubRepositoryMetadata: { name: 'academic-genealogy-rs' },
      stack: ['Python', 'Scikit-learn']
    },
    {
      githubRepositoryID: "gabrielmadeira/murk",
      githubRepositoryBranch: "main",
      githubRepositoryMetadata: { name: 'murk' },
      stack: ['C#', 'Unity']
    },
    {
      githubRepositoryID: "gabrielmadeira/news-recommender-system",
      githubRepositoryBranch: "main",
      githubRepositoryMetadata: { name: 'news-recommender-system' },
      stack: ['Vue.js', 'Neo4j', 'Python']
    },
    {
      githubRepositoryID: "gabrielmadeira/thegoldtree",
      githubRepositoryBranch: "master",
      githubRepositoryMetadata: { name: 'thegoldtree' },
      stack: ['Javascript', 'd3.js', 'HTML', 'CSS', 'PostgreSQL']
    },
    {
      githubRepositoryID: "gabrielmadeira/z-waves",
      githubRepositoryBranch: "master",
      githubRepositoryMetadata: { name: 'z-waves' },
      stack: ['C++', 'OpenGL']
    },
    {
      githubRepositoryID: "gabrielmadeira/music-creator",
      githubRepositoryBranch: "main",
      githubRepositoryMetadata: { name: 'music-creator' },
      stack: ['Java']
    },
    {
      githubRepositoryID: "gabrielmadeira/youtube-db",
      githubRepositoryBranch: "main",
      githubRepositoryMetadata: { name: 'youtube-db' },
      stack: ['PostgreSQL', 'Python']
    },
  ]

  ngOnInit(): void {
    this.http.get('https://api.github.com/users/gabrielmadeira/repos').subscribe((response) => {
      // console.log(response)  
      for (let project of this.projectList) {
        let repo = Object.values(response).find(repo => project['githubRepositoryID'] === repo.full_name)
        if(repo !== undefined)
          project['githubRepositoryMetadata'] = repo
      }
      // console.log(this.projectList)
    });
  }

}
