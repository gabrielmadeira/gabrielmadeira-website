import { Component, OnInit, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {

  langList = [
    {
      name:"Python", 
      time: "2 years"
    },
    {
      name:"JavaScript", 
      time: "2 years"
    },
    {
      name:"SQL", 
      time: "2 years"
    },
    {
      name:"C/C++", 
      time: "1 year"
    },
    {
      name:"PHP", 
      time: "1 year"
    },
    {
      name:"Delphi", 
      time: "4 months"
    }
  ];

  techList = [
    {
      name:"HTML", 
    },
    {
      name:"CSS", 
    },
    {
      name:"Vue.js", 
    },
    {
      name:"Git", 
    },
    {
      name:"Unix/Bash", 
    },
    {
      name:"Scikit-Learn", 
    },
    {
      name:"Pandas", 
    },
    {
      name:"Angular", 
    }
  ];

  constructor() {}

  ngOnInit(): void {
    this.drawInterestsPentagon();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.drawInterestsPentagon();
  }

  drawInterestsPentagon () {
    var skills:any = [
      {
        header: 'My Fields of Interest',
        header2: 'in Computer Science',
        captions: ['Data\nScience', 'Artificial\nIntelligence', 'Application\nDevelopment', 'Computer\nGraphics', 'Cyber\nSecurity'],
        values: [0.7, 0.9, 0.7, 0.8, 0.7],
      }
    ];

    var pentagonIndex = 0;
    var valueIndex = 0;
    var width = 0;
    var height = 0;
    var radOffset = Math.PI / 2;
    var sides = 5; // Number of sides in the polygon
    var theta = (2 * Math.PI) / sides; // radians per section

    function getXY(i, radius) {
      return {
        x: Math.cos(radOffset + theta * i) * radius * width + width / 2,
        y: Math.sin(radOffset + theta * i) * radius * height + height / 2,
      };
    }

    var hue = [];
    var hueOffset = 200;
    
    $(skills).each(function (s) {
      // console.log(s);
      $('.content-interests').html(
        '<div class="pentagon" id="interests"><div class="header"></div><canvas class="pentCanvas"/></div>'
      );
      hue[s] = (hueOffset + (255 * s) / skills.length) % 255;
      
    });

    $('.pentagon').each(function (index) {
      width = $(this).width() * 0.85;
      // console.log($(this).width());
      // height = $(this).height();
      height = width;
      var ctx = $(this).find('canvas')[0].getContext('2d');
      ctx.canvas.width = width;
      ctx.canvas.height = height;
      ctx.font = 'bold 14px Helvetica';
      ctx.textAlign = 'center';

      /*** LABEL ***/
      var color = 'hsl(' + hue[pentagonIndex] + ', 11%, 15%)';
      ctx.fillStyle = color;
      ctx.fillText(skills[pentagonIndex].header, width / 2, 15);
      ctx.fillText(skills[pentagonIndex].header2, width / 2, 32);

      ctx.font = 'bold 12px Helvetica';

      /*** PENTAGON BACKGROUND ***/
      for (var i = 0; i < sides; i++) {
        // For each side, draw two segments: the side, and the radius
        ctx.beginPath();
        var xy = getXY(i, 0.3);
        var colorJitter = 25 + theta * i * 2;
        color = 'hsl(' + hue[pentagonIndex] + ',11%,' + colorJitter + '%)';
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.moveTo(0.5 * width, 0.5 * height); //center
        ctx.lineTo(xy.x, xy.y);
        xy = getXY(i + 1, 0.3);
        ctx.lineTo(xy.x, xy.y);
        xy = getXY(i, 0.37);
        // console.log();
        
        var lines = skills[pentagonIndex].captions[valueIndex].split('\n');
        var lineheight = 12;
        var moveValuesX = [0,+2,-10,+10,+5]
        var moveValuesY = [5,8,-10,-10, 0]
        for (var j = 0; j<lines.length; j++) {
          ctx.fillText(
            lines[j],
            xy.x + moveValuesX[valueIndex],
            xy.y + 5 + moveValuesY[valueIndex] + (j*lineheight)
          );
        }
        
        valueIndex++;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }

      valueIndex = 0;
      ctx.beginPath();
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.lineWidth = 5;
      var value = skills[pentagonIndex].values[valueIndex];
      xy = getXY(i, value * 0.3);
      ctx.moveTo(xy.x, xy.y);
      /*** SKILL GRAPH ***/
      for (var i = 0; i < sides; i++) {
        xy = getXY(i, value * 0.3);
        ctx.lineTo(xy.x, xy.y);
        valueIndex++;
        value = skills[pentagonIndex].values[valueIndex];
      }
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
      valueIndex = 0;
      pentagonIndex++;
    });
  }
}
