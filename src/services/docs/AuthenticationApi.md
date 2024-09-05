# OpenApiSpecificationMauro.AuthenticationApi

All URIs are relative to *http://localhost:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateAccount**](AuthenticationApi.md#activateAccount) | **GET** /auth/activate-account | 
[**authenticate**](AuthenticationApi.md#authenticate) | **POST** /auth/authenticate | 
[**register**](AuthenticationApi.md#register) | **POST** /auth/register | 



## activateAccount

> activateAccount(token)



### Example

```javascript
import OpenApiSpecificationMauro from 'open_api_specification_mauro';
let defaultClient = OpenApiSpecificationMauro.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationMauro.AuthenticationApi();
let token = "token_example"; // String | 
apiInstance.activateAccount(token, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## authenticate

> AuthenticationResponseDto authenticate(authenticationDto)



### Example

```javascript
import OpenApiSpecificationMauro from 'open_api_specification_mauro';
let defaultClient = OpenApiSpecificationMauro.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationMauro.AuthenticationApi();
let authenticationDto = new OpenApiSpecificationMauro.AuthenticationDto(); // AuthenticationDto | 
apiInstance.authenticate(authenticationDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authenticationDto** | [**AuthenticationDto**](AuthenticationDto.md)|  | 

### Return type

[**AuthenticationResponseDto**](AuthenticationResponseDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## register

> Object register(registrationDto)



### Example

```javascript
import OpenApiSpecificationMauro from 'open_api_specification_mauro';
let defaultClient = OpenApiSpecificationMauro.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationMauro.AuthenticationApi();
let registrationDto = new OpenApiSpecificationMauro.RegistrationDto(); // RegistrationDto | 
apiInstance.register(registrationDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationDto** | [**RegistrationDto**](RegistrationDto.md)|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

