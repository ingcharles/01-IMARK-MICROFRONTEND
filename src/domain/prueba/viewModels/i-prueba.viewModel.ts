/**
* Interface i-prueba.viewModel.
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    PruebaviewModel
* @package viewModel
* @subpackage Domain
*/

import { IAuditoriaViewModel } from '../../base/viewModels/i-auditoriaView.Model';


/**
* Interface que contiene el datos de entrada que viene del servicio
* @name ISavePruebaRsViewModel
*/
export interface ISavePruebaRsViewModel {
	id: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaViewModel
* @name ISavePruebaViewModel
*/
export interface ISavePruebaViewModel extends IAuditoriaViewModel {
	nombre?: string | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetPruebaRsViewModel
*/
export interface IGetPruebaRsViewModel {
	id?: number | null;
	nombre?: string | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetPruebaViewModel
*/
export interface IGetPruebaViewModel {
	busqueda?: string | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetPruebaPaginadoRsViewModel
*/
export interface IGetPruebaPaginadoRsViewModel {
	id?: number | null;
	nombre?: string | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetPruebaPaginadoViewModel
*/
export interface IGetPruebaPaginadoViewModel {
	page: number;
	size: number;
	search: string;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetPruebaByIdRsViewModel
*/
export interface IGetPruebaByIdRsViewModel {
	id?: number | null;
	nombre?: string | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetPruebaByIdViewModel
*/
export interface IGetPruebaByIdViewModel {
	id: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IUpdatePruebaRsViewModel
*/
export interface IUpdatePruebaRsViewModel {
	id: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaViewModel
* @name IUpdatePruebaViewModel
*/
export interface IUpdatePruebaViewModel extends IAuditoriaViewModel {
	id?: number | null;
	nombre?: string | null;
}
