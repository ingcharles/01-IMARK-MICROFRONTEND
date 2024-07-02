/**
* Interface i-localizacion-prueba.viewModel.
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    LocalizacionPruebaviewModel
* @package viewModel
* @subpackage Domain
*/

import { IAuditoriaViewModel } from '../../base/viewModels/i-auditoriaView.Model';


/**
* Interface que contiene el datos de entrada que viene del servicio
* @name ISaveLocalizacionPruebaRsViewModel
*/
export interface ISaveLocalizacionPruebaRsViewModel {
	idLocalizacionPrueba: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaViewModel
* @name ISaveLocalizacionPruebaViewModel
*/
export interface ISaveLocalizacionPruebaViewModel extends IAuditoriaViewModel {
  idLocalizacionPrueba?: string | null;
	nombreLocalizacionPrueba?: string | null;
	fechaLocalizacionPrueba?: Date | null;
	isLocalizacionPrueba?: boolean | null;
	enteroLocalizacionPrueba?: number | null;
	decimalLocalizacionPrueba?: number | null;
	descripcionLocalizacionPrueba?: string | null;
	estadoLocalizacionPrueba?: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetLocalizacionPruebaRsViewModel
*/
export interface IGetLocalizacionPruebaRsViewModel {
	idLocalizacionPrueba?: number | null;
	nombreLocalizacionPrueba?: string | null;
	fechaLocalizacionPrueba?: Date | null;
	isLocalizacionPrueba?: boolean | null;
	enteroLocalizacionPrueba?: number | null;
	decimalLocalizacionPrueba?: number | null;
	descripcionLocalizacionPrueba?: string | null;
	estadoLocalizacionPrueba?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetLocalizacionPruebaViewModel
*/
export interface IGetLocalizacionPruebaViewModel {
	busqueda?: string | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetLocalizacionPruebaPaginadoRsViewModel
*/
export interface IGetLocalizacionPruebaPaginadoRsViewModel {
	idLocalizacionPrueba?: number | null;
	nombreLocalizacionPrueba?: string | null;
	fechaLocalizacionPrueba?: Date | null;
	isLocalizacionPrueba?: boolean | null;
	enteroLocalizacionPrueba?: number | null;
	decimalLocalizacionPrueba?: number | null;
	descripcionLocalizacionPrueba?: string | null;
	estadoLocalizacionPrueba?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetLocalizacionPruebaPaginadoViewModel
*/
export interface IGetLocalizacionPruebaPaginadoViewModel {
	page: number;
	size: number;
	search: string;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetLocalizacionPruebaByIdRsViewModel
*/
export interface IGetLocalizacionPruebaByIdRsViewModel {
	idLocalizacionPrueba?: number | null;
	nombreLocalizacionPrueba?: string | null;
	fechaLocalizacionPrueba?: Date | null;
	isLocalizacionPrueba?: boolean | null;
	enteroLocalizacionPrueba?: number | null;
	decimalLocalizacionPrueba?: number | null;
	descripcionLocalizacionPrueba?: string | null;
	estadoLocalizacionPrueba?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetLocalizacionPruebaByIdViewModel
*/
export interface IGetLocalizacionPruebaByIdViewModel {
	idLocalizacionPrueba: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IUpdateLocalizacionPruebaRsViewModel
*/
export interface IUpdateLocalizacionPruebaRsViewModel {
	idLocalizacionPrueba: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaViewModel
* @name IUpdateLocalizacionPruebaViewModel
*/
export interface IUpdateLocalizacionPruebaViewModel extends IAuditoriaViewModel {
	idLocalizacionPrueba?: number | null;
	nombreLocalizacionPrueba?: string | null;
	fechaLocalizacionPrueba?: Date | null;
	isLocalizacionPrueba?: boolean | null;
	enteroLocalizacionPrueba?: number | null;
	decimalLocalizacionPrueba?: number | null;
	descripcionLocalizacionPrueba?: string | null;
	estadoLocalizacionPrueba?: number | null;
}
