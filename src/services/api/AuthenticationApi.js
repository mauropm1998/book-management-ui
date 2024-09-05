/**
 * OpenApi specification - Mauro
 * OpenApi documentation for Spring Security
 *
 * The version of the OpenAPI document: 1.0
 * Contact: maurocristovao1998@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AuthenticationDto from '../model/AuthenticationDto';
import AuthenticationResponseDto from '../model/AuthenticationResponseDto';
import RegistrationDto from '../model/RegistrationDto';

/**
* Authentication service.
* @module api/AuthenticationApi
* @version 1.0
*/
export default class AuthenticationApi {

    /**
    * Constructs a new AuthenticationApi. 
    * @alias module:api/AuthenticationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the activateAccount operation.
     * @callback module:api/AuthenticationApi~activateAccountCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} token 
     * @param {module:api/AuthenticationApi~activateAccountCallback} callback The callback function, accepting three arguments: error, data, response
     */
    activateAccount(token, callback) {
      let postBody = null;
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling activateAccount");
      }

      let pathParams = {
      };
      let queryParams = {
        'token': token
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/auth/activate-account', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the authenticate operation.
     * @callback module:api/AuthenticationApi~authenticateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuthenticationResponseDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/AuthenticationDto} authenticationDto 
     * @param {module:api/AuthenticationApi~authenticateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuthenticationResponseDto}
     */
    authenticate(authenticationDto, callback) {
      let postBody = authenticationDto;
      // verify the required parameter 'authenticationDto' is set
      if (authenticationDto === undefined || authenticationDto === null) {
        throw new Error("Missing the required parameter 'authenticationDto' when calling authenticate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = AuthenticationResponseDto;
      return this.apiClient.callApi(
        '/auth/authenticate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the register operation.
     * @callback module:api/AuthenticationApi~registerCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/RegistrationDto} registrationDto 
     * @param {module:api/AuthenticationApi~registerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    register(registrationDto, callback) {
      let postBody = registrationDto;
      // verify the required parameter 'registrationDto' is set
      if (registrationDto === undefined || registrationDto === null) {
        throw new Error("Missing the required parameter 'registrationDto' when calling register");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/auth/register', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
