/**
* Interface i-localizacion-prueba.viewModel.
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    LocalizacionPruebaviewModel
* @package viewModel
* @subpackage Domain
*/

import { IAuditoriaModel } from 'src/data/general/models/i-auditoria.model';
import { IResponseStatusViewModel } from 'src/domain/general/viewModels/i-response-status.viewModel';


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
	id_localizacion_prueba: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name ISaveLocalizacionPruebaViewModel
*/
export interface ISaveLocalizacionPruebaViewModel extends IAuditoriaModel {
	nombre_localizacion_prueba?: string | null;
	is_localizacion_prueba?: boolean | null;
	entero_localizacion_prueba?: number | null;
	decimal_localizacion_prueba?: number | null;
	descripcion_localizacion_prueba?: string | null;
	fecha_localizacion_prueba?: Date | null;
	estado_localizacion_prueba?: number | null;
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
	id_localizacion_prueba?: number | null;
	nombre_localizacion_prueba?: string | null;
	is_localizacion_prueba?: boolean | null;
	entero_localizacion_prueba?: number | null;
	decimal_localizacion_prueba?: number | null;
	descripcion_localizacion_prueba?: string | null;
	fecha_localizacion_prueba?: Date | null;
	estado_localizacion_prueba?: number | null;
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
	id_localizacion_prueba?: number | null;
	nombre_localizacion_prueba?: string | null;
	is_localizacion_prueba?: boolean | null;
	entero_localizacion_prueba?: number | null;
	decimal_localizacion_prueba?: number | null;
	descripcion_localizacion_prueba?: string | null;
	fecha_localizacion_prueba?: Date | null;
	estado_localizacion_prueba?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetLocalizacionPruebaPaginadoViewModel
*/
export interface IGetLocalizacionPruebaPaginadoViewModel {
	busqueda?: string | null;
	campo_orden?: string | null;
	orden?: string | null;
	indice_inicio?: number | null;
	cantidad_registro?: number | null;
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
	id_localizacion_prueba?: number | null;
	nombre_localizacion_prueba?: string | null;
	is_localizacion_prueba?: boolean | null;
	entero_localizacion_prueba?: number | null;
	decimal_localizacion_prueba?: number | null;
	descripcion_localizacion_prueba?: string | null;
	fecha_localizacion_prueba?: Date | null;
	estado_localizacion_prueba?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetLocalizacionPruebaByIdViewModel
*/
export interface IGetLocalizacionPruebaByIdViewModel {
	id_localizacion_prueba: number | null;
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
	id_localizacion_prueba: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IUpdateLocalizacionPruebaViewModel
*/
export interface IUpdateLocalizacionPruebaViewModel extends IAuditoriaModel {
	id_localizacion_prueba?: number | null;
	nombre_localizacion_prueba?: string | null;
	is_localizacion_prueba?: boolean | null;
	entero_localizacion_prueba?: number | null;
	decimal_localizacion_prueba?: number | null;
	descripcion_localizacion_prueba?: string | null;
	fecha_localizacion_prueba?: Date | null;
	estado_localizacion_prueba?: number | null;
}
