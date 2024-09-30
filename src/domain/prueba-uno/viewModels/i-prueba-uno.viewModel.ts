/**
* Interface i-prueba-uno.viewModel.
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    PruebaUnoviewModel
* @package viewModel
* @subpackage Domain
*/

import { IAuditoriaViewModel } from '../../base/viewModels/i-auditoriaView.Model';


/**
* Interface que contiene el datos de entrada que viene del servicio
* @name ISavePruebaUnoRsViewModel
*/
export interface ISavePruebaUnoRsViewModel {
	idUno: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaViewModel
* @name ISavePruebaUnoViewModel
*/
export interface ISavePruebaUnoViewModel extends IAuditoriaViewModel {
	nombreUno?: string | null;
	fechaUno?: Date | null;
	estadoUno?: boolean | null;
	enteroUno?: number | null;
	decimalUno?: number | null;
	itemUno?: number | null;
	nombreLargoUno?: string | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetPruebaUnoRsViewModel
*/
export interface IGetPruebaUnoRsViewModel {
	idUno?: number | null;
	nombreUno?: string | null;
	fechaUno?: Date | null;
	estadoUno?: boolean | null;
	enteroUno?: number | null;
	decimalUno?: number | null;
	itemUno?: number | null;
	nombreLargoUno?: string | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetPruebaUnoViewModel
*/
export interface IGetPruebaUnoViewModel {
	busqueda?: string | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetPruebaUnoPaginadoRsViewModel
*/
export interface IGetPruebaUnoPaginadoRsViewModel {
	idUno?: number | null;
	nombreUno?: string | null;
	fechaUno?: Date | null;
	estadoUno?: boolean | null;
	enteroUno?: number | null;
	decimalUno?: number | null;
	itemUno?: number | null;
	nombreLargoUno?: string | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetPruebaUnoPaginadoViewModel
*/
export interface IGetPruebaUnoPaginadoViewModel {
	page: number;
	size: number;
	search: string;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetPruebaUnoByIdRsViewModel
*/
export interface IGetPruebaUnoByIdRsViewModel {
	idUno?: number | null;
	nombreUno?: string | null;
	fechaUno?: Date | null;
	estadoUno?: boolean | null;
	enteroUno?: number | null;
	decimalUno?: number | null;
	itemUno?: number | null;
	nombreLargoUno?: string | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetPruebaUnoByIdViewModel
*/
export interface IGetPruebaUnoByIdViewModel {
	idUno: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IUpdatePruebaUnoRsViewModel
*/
export interface IUpdatePruebaUnoRsViewModel {
	idUno: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaViewModel
* @name IUpdatePruebaUnoViewModel
*/
export interface IUpdatePruebaUnoViewModel extends IAuditoriaViewModel {
	idUno?: number | null;
	nombreUno?: string | null;
	fechaUno?: Date | null;
	estadoUno?: boolean | null;
	enteroUno?: number | null;
	decimalUno?: number | null;
	itemUno?: number | null;
	nombreLargoUno?: string | null;
}
