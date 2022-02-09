
import { from } from 'rxjs';
import { mergeMap, map, tap } from 'rxjs/operators';

function getNew() {
  function pp(a, ...b) {
    return a.pipe(...b);
  }
  return {
    a: [],
    get data() {
      return this.a;
    },
    set data(d) {
      this.a.push(d);
    },
    get_val() {
      return pp(...this.a);
    },
  };
}

function aj(utl) {
  return from(fetch(utl).then((response) => response.json()));
}
var mp2 = (xx) => {
  xx.time = 'werwerrew____________r';
  return xx;
};
var mp1 = (d) => d.map(mp2);
var x = getNew();
x.data = aj('https://jsonplaceholder.typicode.com/todos/1');
x.data = mergeMap((d) => aj('https://jsonplaceholder.typicode.com/comments'));
x.data = map(mp1);

x.get_val().subscribe((_) => {
  console.log('data=>', _);
});
 aj = $.cordys.ajax({
        method: 'Getbsa_UserScreenAccess',
        
        namespace: 'http://schemas.cordys.com/bsaWsApp',

        dataType: '* json',
        
        parameters: {},
        timeout: 1800000,

        
      })

      of([]).pipe(
      tap(d => { 
      $('body').append("<div class='loader'></div>");
      }),
      mergeMap(d => from(aj)),
      finally(d => {
         $('.loader').last().remove();
      })
      )
      ////////////////////////////////
        ajax(method, namespace, parameters, flag = true) {
    const that = this;
    return new Promise((rev, rej) => {
      if (flag === true) {
        that.start();
      }

      $.cordys.ajax({
        method: method,
        beforeSend: function (xhr, settings) {
          if (settings.data !== undefined && settings.data !== 'undefined') {
            that.setAjax(settings.data);
          }
          // if(new TextEncoder().encode(that.getAjax()).length > 10000000)
          if (that.getAjax().length > 500) {
            that.delAjax();
          }
        },
        namespace: namespace,

        dataType: '* json',

        parameters: parameters,
        timeout: environment.timeout,

        success: function success(resp) {
          if (flag === true) {
            that.stop();
          }

          rev(that.n(resp));
        },
        error: function error(e1, e2, e3) {
          if (flag === true) {
            that.stop();
          }
          rej([e1, e2, e3]);
        },
      });
    });
  }
  ////////////////////
  start() {
    $('body').append("<div class='loader'></div>");
  }
  stop() {
    $('.loader').last().remove();
  }
  #############################
  import { Component, OnInit, VERSION } from '@angular/core';
import { catchError, finalize, mergeMap ,tap  } from 'rxjs/operators';
import { of,from ,forkJoin} from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  aj(url){
    return from(fetch(url)
  .then(response => response.json()))  
  }
  pp(a,...b){
     return a.pipe(...b);
  }
  get(url){
    return this.pp(of([]),
    tap(d => {
      console.log("start")
   }),
   mergeMap(d => this.aj(url)),
   finalize(()=>{
    console.log("stop")
    
   }),catchError(d =>{
      return of({get:"err"})
   }))
  }
  ngOnInit(){
     forkJoin([
       this.get('https://jsonplaceholder.typicode.com/todos/1'),
       this.get('https://jsonplaceholder.typicode.com/todos/2'),
       this.get('https://jsonplaceholder.typicode.3com/todos/1'),
       this.get('https://jsonplaceholder.typicode.com/todos/4')
     ]).subscribe(resp =>{
        console.log("resp => ",resp);
     })
  }
}
////////////////////////////////////////////////////
let x = $.cordys.get().val();

    function aj(method, namespace, parameters) {
      const x = method.split('.');
      return from(
        $.cordys.ajax({
          method: x[0],

          namespace: namespace,

          dataType: '* json',

          parameters: parameters,
          timeout: 1800000,
        }),
      ).pipe(map((d) => $.cordys.json.find(d, x[1])));
    }
    x.data = aj(
      'Getbsa_UserScreenAccess.bsa_role_access_master',
      'http://schemas.cordys.com/bsaWsApp',
      {},
    );
    x.data = aj(
      'Getbsa_UserScreenAccess.bsa_role_access_master',
      'http://schemas.cordys.com/bsaWsApp',
      {},
    );
    x.data = aj(
      'Getbsa_UserScreenAccess.bsa_role_access_master',
      'http://schemas.cordys.com/bsaWsApp',
      {},
    );
    x.data = aj(
      'Getbsa_UserScreenAccess.bsa_role_access_master',
      'http://schemas.cordys.com/bsaWsApp',
      {},
    );
    x.data = aj(
      'Getbsa_UserScreenAccess.bsa_role_access_master',
      'http://schemas.cordys.com/bsaWsApp',
      {},
    );
    x.data = aj(
      'Getbsa_UserScreenAccess.bsa_role_access_master',
      'http://schemas.cordys.com/bsaWsApp',
      {},
    );
    x.data = aj(
      'Getbsa_UserScreenAccess.bsa_role_access_master',
      'http://schemas.cordys.com/bsaWsApp',
      {},
    );
    let y = $.cordys.get().val();
    y.data = forkJoin(x.data);
    debugger;
    y.val().subscribe((_) => {
      console.log('asdfasdfsafsafsafsadfsdfsafsdaf=>', _);
    });
