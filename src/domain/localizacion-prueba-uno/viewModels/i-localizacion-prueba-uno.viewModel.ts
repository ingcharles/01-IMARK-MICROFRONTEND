/**
* Interface i-localizacion-prueba-uno.viewModel.
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    LocalizacionPruebaUnoviewModel
* @package viewModel
* @subpackage Domain
*/

import { IAuditoriaViewModel } from '../../base/viewModels/i-auditoriaView.Model';


/**
* Interface que contiene el datos de entrada que viene del servicio
* @name ISaveLocalizacionPruebaUnoRsViewModel
*/
export interface ISaveLocalizacionPruebaUnoRsViewModel {
	campoSerial: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaViewModel
* @name ISaveLocalizacionPruebaUnoViewModel
*/
export interface ISaveLocalizacionPruebaUnoViewModel extends IAuditoriaViewModel {
	campoFechaUnicio?: Date | null;
	campoFechaFin?: Date | null;
	campoDescripcion?: string | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetLocalizacionPruebaUnoRsViewModel
*/
export interface IGetLocalizacionPruebaUnoRsViewModel {
	campoSerial?: number | null;
	campoFechaUnicio?: Date | null;
	campoFechaFin?: Date | null;
	campoDescripcion?: string | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetLocalizacionPruebaUnoViewModel
*/
export interface IGetLocalizacionPruebaUnoViewModel {
	busqueda?: string | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetLocalizacionPruebaUnoPaginadoRsViewModel
*/
export interface IGetLocalizacionPruebaUnoPaginadoRsViewModel {
	campoSerial?: number | null;
	campoFechaUnicio?: Date | null;
	campoFechaFin?: Date | null;
	campoDescripcion?: string | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetLocalizacionPruebaUnoPaginadoViewModel
*/
export interface IGetLocalizacionPruebaUnoPaginadoViewModel {
	page: number;
	size: number;
	search: string;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetLocalizacionPruebaUnoByIdRsViewModel
*/
export interface IGetLocalizacionPruebaUnoByIdRsViewModel {
	campoSerial?: number | null;
	campoFechaUnicio?: Date | null;
	campoFechaFin?: Date | null;
	campoDescripcion?: string | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetLocalizacionPruebaUnoByIdViewModel
*/
export interface IGetLocalizacionPruebaUnoByIdViewModel {
	campoSerial: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IUpdateLocalizacionPruebaUnoRsViewModel
*/
export interface IUpdateLocalizacionPruebaUnoRsViewModel {
	campoSerial: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaViewModel
* @name IUpdateLocalizacionPruebaUnoViewModel
*/
export interface IUpdateLocalizacionPruebaUnoViewModel extends IAuditoriaViewModel {
	campoSerial?: number | null;
	campoFechaUnicio?: Date | null;
	campoFechaFin?: Date | null;
	campoDescripcion?: string | null;
}
