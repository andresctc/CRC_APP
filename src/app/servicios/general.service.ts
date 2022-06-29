import { UtilitariosService } from './utilitarios.service';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  /**
   ** Variable para guardar la configuración
   **/
   private config: any;

   /**
    ** The constructor
    ** @param http HttpClient
    **/
   constructor(
     private route: Router,
     public http: HttpClient,
     private location: Location,
     private utils: UtilitariosService
   ) { }


   /**
    * @getModes
    * Funcion que obtiene todos los Metodos del web Services
    * Proceso de destino ('Obtener Metodos ...')
    *
    * @returns una lista de tipo IModes
    * ```
    *  Ejemplo retorno
    *  [{Id:	1, Name: 'Demo 1', Active: true},  {Id:	2, Name: 'Demo 2', Active: true} ]
    *
    * ```
    */
   getMethod(urlRoute: string, parameters?: HttpParams, payload?: any): Observable<any> {
     const url = `${environment.pathHost}${urlRoute}`;
     if (parameters !== null) {
       if (payload) {
         const payloads = {
           params: parameters,
           payload,
         };
         return this.http.get<any>(url, payloads);
       } else {
         return this.http.get<any>(url, { params: parameters });
       }
     } else {
       return this.http.get<any>(url);
     }
   }

  /**
   *  @createModes
   * Funcion que Permite la creacion de un nuevo Metodo en un servicio
   * Proceso de destino ('Obtener Metodos ...')
   * @param urlRoute
   * @param pathName
   * @param body
   * @param otherApi
   * @returns
   */
  postMethod(urlRoute: string, body?: any, cabez?: boolean): any {
    //console.log(body);
    const path = `${environment.pathHost}${urlRoute}`;
    // console.log(path);
    // const vHeaders = {
    //   // eslint-disable-next-line @typescript-eslint/naming-convention
    //   Authorization: 'Bearer '  + this.utils.tokenID
    // };

    // if(cabez) {
    //   return this.http.post<any>(path, body,{headers: vHeaders});
    // } else {
    //   return this.http.post<any>(path, body);
    // }
    return this.http.post<any>(path, body);
  }

  /**
   ** @updateMethod
   ** Funcion que me permite realizar la actualización de Metodos en un servicio
   ** Proceso de destino ('Obtener Metodos ...')
   ** @param {string} urlRoute  Objeto de tipo Imodes {@link Todo}
   ** @param {any} pathName  Objeto de tipo Imodes {@link Todo}
   ** @param {any} body  Objeto de tipo Imodes {@link Todo}
   ** @returns una lista de tipo any
   **/
  updateMethod(urlRoute: string, pathName?: any, body?: any): Observable<any> {
    const path = `${environment.pathHost}${urlRoute}`;
    return this.http.put<any>(path, body);
  }

   /**
    ** @deleteMethod
    ** Funcion que me permite realizar el borrado de un dato en un servicio
    ** Proceso de destino ('Eliminar Metodo')
    **
    ** @param {string} urlRoute  Objeto de tipo string {@link Todo}
    ** @param {Number} id  Objeto de tipo Number {@link Todo}
    ** @returns id de tipo any
    **/
   deleteMethod(urlRoute: string, params: HttpParams): Observable<any> {
     const path = `${environment.pathHost}${urlRoute}`;
     return this.http.delete<any>(path, { params });
   }

}
