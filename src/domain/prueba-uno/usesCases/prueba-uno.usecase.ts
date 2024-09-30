/**
* Clase PruebaUnoUseCase.
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    PruebaUnoUseCase
* @package UseCase
* @subpackage Domain
*/

import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { PruebaUnoService } from '../../../data/prueba-uno/services/prueba-uno.services';
import { IGetPruebaUnoByIdRsViewModel, IGetPruebaUnoByIdViewModel, IGetPruebaUnoRsViewModel, IGetPruebaUnoViewModel, IGetPruebaUnoPaginadoRsViewModel, IGetPruebaUnoPaginadoViewModel, ISavePruebaUnoRsViewModel, ISavePruebaUnoViewModel, IUpdatePruebaUnoRsViewModel, IUpdatePruebaUnoViewModel  } from '../viewModels/i-prueba-uno.viewModel';
import { IResponseStatusViewModel } from '../../base/viewModels/i-response-status.viewModel';


@Injectable({
	providedIn: 'root',
})
export class PruebaUnoUseCase {

	/**
	* Constructor
	* Se pueden llamar los servicios que van ser utilizados en los casos de uso
	 */
	constructor()
	{
	}
	_pruebaUnoService: PruebaUnoService = inject(PruebaUnoService)

	/**
	* Guarda el registro actual
	* @param pruebaUno: ISavePruebaUnoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<ISavePruebaUnoRsViewModel>>>
	*/
	public async savePruebaUno(pruebaUno: ISavePruebaUnoViewModel): Promise<Observable<IResponseStatusViewModel<ISavePruebaUnoRsViewModel>>> {
	return await this._pruebaUnoService.savePruebaUno(pruebaUno);
	}
	/**
	* Obtiene el/los registros
	* @param pruebaUno: IGetPruebaUnoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetPruebaUnoRsViewModel>>>
	*/
	public async getPruebaUno(pruebaUno: IGetPruebaUnoViewModel): Promise<Observable<IResponseStatusViewModel<IGetPruebaUnoRsViewModel>>> {
	return await this._pruebaUnoService.getPruebaUno(pruebaUno);
	}
	/**
	* Obtiene el/los registros
	* @param pruebaUno: IGetPruebaUnoPaginadoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetPruebaUnoPaginadoRsViewModel>>>
	*/
	public async getPruebaUnoPaginado(pruebaUno: IGetPruebaUnoPaginadoViewModel): Promise<Observable<IResponseStatusViewModel<IGetPruebaUnoPaginadoRsViewModel>>> {
	return await this._pruebaUnoService.getPruebaUnoPaginado(pruebaUno);
	}
	/**
	* Obtiene el registro por id
	* @param pruebaUno: IGetPruebaUnoByIdViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetPruebaUnoByIdRsViewModel>>>
	*/
	public async getPruebaUnoById(pruebaUno: IGetPruebaUnoByIdViewModel): Promise<Observable<IResponseStatusViewModel<IGetPruebaUnoByIdRsViewModel>>> {
	return await this._pruebaUnoService.getPruebaUnoById(pruebaUno);
	}
	/**
	* Obtiene el/los registros
	* @param pruebaUno: IUpdatePruebaUnoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IUpdatePruebaUnoRsViewModel>>>
	*/
	public async updatePruebaUno(pruebaUno: IUpdatePruebaUnoViewModel): Promise<Observable<IResponseStatusViewModel<IUpdatePruebaUnoRsViewModel>>> {
	return await this._pruebaUnoService.updatePruebaUno(pruebaUno);
	}

}
