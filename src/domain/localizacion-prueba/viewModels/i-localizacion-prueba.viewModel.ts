/**
* Interface i-localizacion-prueba.viewModel.
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    LocalizacionPruebaviewModel
* @package viewModel
* @subpackage Domain
*/

import { IAuditoriaViewModel } from '../../base/viewModels/i-auditoriaViewModel';
import { IResponseStatusViewModel } from '../../base/viewModels/i-response-status.viewModel';


/**
* Interface que contiene los datos de entrada que viene del servicio
* Extiende IResponseStatusViewModel
* @name ISaveLocalizacionPruebaFromRsViewModel
*/
export interface ISaveLocalizacionPruebaFromRsViewModel extends IResponseStatusViewModel {
	data?: ISaveLocalizacionPruebaRsViewModel | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name ISaveLocalizacionPruebaRsViewModel
*/
export interface ISaveLocalizacionPruebaRsViewModel {
	idLocalizacionPrueba: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name ISaveLocalizacionPruebaViewModel
*/
export interface ISaveLocalizacionPruebaViewModel extends IAuditoriaViewModel {
	nombreLocalizacionPrueba?: string | null;
	isLocalizacionPrueba?: boolean | null;
	enteroLocalizacionPrueba?: number | null;
	decimalLocalizacionPrueba?: number | null;
	descripcionLocalizacionPrueba?: string | null;
	fechaLocalizacionPrueba?: Date | null;
	estadoLocalizacionPrueba?: number | null;
}

/**
* Interface que contiene los datos de entrada que viene del servicio
* Extiende IResponseStatusViewModel
* @name IGetLocalizacionPruebaFromRsViewModel
*/
export interface IGetLocalizacionPruebaFromRsViewModel extends IResponseStatusViewModel {
	data?: IGetLocalizacionPruebaRsViewModel[] | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetLocalizacionPruebaRsViewModel
*/
export interface IGetLocalizacionPruebaRsViewModel {
	idLocalizacionPrueba?: number | null;
	nombreLocalizacionPrueba?: string | null;
	isLocalizacionPrueba?: boolean | null;
	enteroLocalizacionPrueba?: number | null;
	decimalLocalizacionPrueba?: number | null;
	descripcionLocalizacionPrueba?: string | null;
	fechaLocalizacionPrueba?: Date | null;
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
* Interface que contiene los datos de entrada que viene del servicio
* Extiende IResponseStatusViewModel
* @name IGetLocalizacionPruebaPaginadoFromRsViewModel
*/
export interface IGetLocalizacionPruebaPaginadoFromRsViewModel extends IResponseStatusViewModel {
	data?: IGetLocalizacionPruebaPaginadoRsViewModel[] | null;
	total_registro?: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetLocalizacionPruebaPaginadoRsViewModel
*/
export interface IGetLocalizacionPruebaPaginadoRsViewModel {
	idLocalizacionPrueba?: number | null;
	nombreLocalizacionPrueba?: string | null;
	isLocalizacionPrueba?: boolean | null;
	enteroLocalizacionPrueba?: number | null;
	decimalLocalizacionPrueba?: number | null;
	descripcionLocalizacionPrueba?: string | null;
	fechaLocalizacionPrueba?: Date | null;
	estadoLocalizacionPrueba?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetLocalizacionPruebaPaginadoViewModel
*/
export interface IGetLocalizacionPruebaPaginadoViewModel {
	page: number;
	//campo_orden?: string | null;
	//orden?: string | null;
	size: number;
	search: string;
}



/**
* Interface que contiene los datos de entrada que viene del servicio
* Extiende IResponseStatusViewModel
* @name IGetLocalizacionPruebaByIdFromRsViewModel
*/
export interface IGetLocalizacionPruebaByIdFromRsViewModel extends IResponseStatusViewModel {
	data?: IGetLocalizacionPruebaByIdRsViewModel | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetLocalizacionPruebaByIdRsViewModel
*/
export interface IGetLocalizacionPruebaByIdRsViewModel {
	idLocalizacionPrueba?: number | null;
	nombreLocalizacionPrueba?: string | null;
	isLocalizacionPrueba?: boolean | null;
	enteroLocalizacionPrueba?: number | null;
	decimalLocalizacionPrueba?: number | null;
	descripcionLocalizacionPrueba?: string | null;
	fechaLocalizacionPrueba?: Date | null;
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
* Interface que contiene los datos de entrada que viene del servicio
* Extiende IResponseStatusViewModel
* @name IUpdateLocalizacionPruebaFromRsViewModel
*/
export interface IUpdateLocalizacionPruebaFromRsViewModel extends IResponseStatusViewModel {
	data?: IUpdateLocalizacionPruebaRsViewModel | null;
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
* Extiende IAuditoriaModel
* @name IUpdateLocalizacionPruebaViewModel
*/
export interface IUpdateLocalizacionPruebaViewModel extends IAuditoriaViewModel{
	idLocalizacionPrueba?: number | null;
	nombreLocalizacionPrueba?: string | null;
	isLocalizacionPrueba?: boolean | null;
	enteroLocalizacionPrueba?: number | null;
	decimalLocalizacionPrueba?: number | null;
	descripcionLocalizacionPrueba?: string | null;
	fechaLocalizacionPrueba?: Date | null;
	estadoLocalizacionPrueba?: number | null;
}
