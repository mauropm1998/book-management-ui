# OpenApiSpecificationMauro.BookApi

All URIs are relative to *http://localhost:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveReturnBorrowed**](BookApi.md#approveReturnBorrowed) | **POST** /books/borrow/return/approve/{bookId} | 
[**borrow**](BookApi.md#borrow) | **POST** /books/borrow/{bookId} | 
[**getAll**](BookApi.md#getAll) | **GET** /books | 
[**getAllBorrowed**](BookApi.md#getAllBorrowed) | **GET** /books/borrowed | 
[**getAllByOwner**](BookApi.md#getAllByOwner) | **GET** /books/owner | 
[**getAllReturned**](BookApi.md#getAllReturned) | **GET** /books/returned | 
[**getOne**](BookApi.md#getOne) | **GET** /books/{bookId} | 
[**returnBorrowed**](BookApi.md#returnBorrowed) | **POST** /books/borrow/return/{bookId} | 
[**save1**](BookApi.md#save1) | **POST** /books | 
[**updateArchived**](BookApi.md#updateArchived) | **PATCH** /books/archived/{bookId} | 
[**updateShareable**](BookApi.md#updateShareable) | **PATCH** /books/shareable/{bookId} | 
[**uplodadCoverPicture**](BookApi.md#uplodadCoverPicture) | **POST** /books/cover/{bookId} | 



## approveReturnBorrowed

> Number approveReturnBorrowed(bookId)



### Example

```javascript
import OpenApiSpecificationMauro from 'open_api_specification_mauro';
let defaultClient = OpenApiSpecificationMauro.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationMauro.BookApi();
let bookId = 789; // Number | 
apiInstance.approveReturnBorrowed(bookId, (error, data, response) => {
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
 **bookId** | **Number**|  | 

### Return type

**Number**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## borrow

> Number borrow(bookId)



### Example

```javascript
import OpenApiSpecificationMauro from 'open_api_specification_mauro';
let defaultClient = OpenApiSpecificationMauro.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationMauro.BookApi();
let bookId = 789; // Number | 
apiInstance.borrow(bookId, (error, data, response) => {
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
 **bookId** | **Number**|  | 

### Return type

**Number**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getAll

> PageResponseBookResponseDto getAll(opts)



### Example

```javascript
import OpenApiSpecificationMauro from 'open_api_specification_mauro';
let defaultClient = OpenApiSpecificationMauro.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationMauro.BookApi();
let opts = {
  'page': 0, // Number | 
  'size': 20 // Number | 
};
apiInstance.getAll(opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] [default to 0]
 **size** | **Number**|  | [optional] [default to 20]

### Return type

[**PageResponseBookResponseDto**](PageResponseBookResponseDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getAllBorrowed

> PageResponseBorrowedBookResponseDto getAllBorrowed(opts)



### Example

```javascript
import OpenApiSpecificationMauro from 'open_api_specification_mauro';
let defaultClient = OpenApiSpecificationMauro.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationMauro.BookApi();
let opts = {
  'page': 0, // Number | 
  'size': 20 // Number | 
};
apiInstance.getAllBorrowed(opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] [default to 0]
 **size** | **Number**|  | [optional] [default to 20]

### Return type

[**PageResponseBorrowedBookResponseDto**](PageResponseBorrowedBookResponseDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getAllByOwner

> PageResponseBookResponseDto getAllByOwner(opts)



### Example

```javascript
import OpenApiSpecificationMauro from 'open_api_specification_mauro';
let defaultClient = OpenApiSpecificationMauro.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationMauro.BookApi();
let opts = {
  'page': 0, // Number | 
  'size': 20 // Number | 
};
apiInstance.getAllByOwner(opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] [default to 0]
 **size** | **Number**|  | [optional] [default to 20]

### Return type

[**PageResponseBookResponseDto**](PageResponseBookResponseDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getAllReturned

> PageResponseBorrowedBookResponseDto getAllReturned(opts)



### Example

```javascript
import OpenApiSpecificationMauro from 'open_api_specification_mauro';
let defaultClient = OpenApiSpecificationMauro.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationMauro.BookApi();
let opts = {
  'page': 0, // Number | 
  'size': 20 // Number | 
};
apiInstance.getAllReturned(opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] [default to 0]
 **size** | **Number**|  | [optional] [default to 20]

### Return type

[**PageResponseBorrowedBookResponseDto**](PageResponseBorrowedBookResponseDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getOne

> BookResponseDto getOne(bookId)



### Example

```javascript
import OpenApiSpecificationMauro from 'open_api_specification_mauro';
let defaultClient = OpenApiSpecificationMauro.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationMauro.BookApi();
let bookId = 789; // Number | 
apiInstance.getOne(bookId, (error, data, response) => {
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
 **bookId** | **Number**|  | 

### Return type

[**BookResponseDto**](BookResponseDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## returnBorrowed

> Number returnBorrowed(bookId)



### Example

```javascript
import OpenApiSpecificationMauro from 'open_api_specification_mauro';
let defaultClient = OpenApiSpecificationMauro.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationMauro.BookApi();
let bookId = 789; // Number | 
apiInstance.returnBorrowed(bookId, (error, data, response) => {
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
 **bookId** | **Number**|  | 

### Return type

**Number**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## save1

> Book save1(book)



### Example

```javascript
import OpenApiSpecificationMauro from 'open_api_specification_mauro';
let defaultClient = OpenApiSpecificationMauro.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationMauro.BookApi();
let book = new OpenApiSpecificationMauro.Book(); // Book | 
apiInstance.save1(book, (error, data, response) => {
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
 **book** | [**Book**](Book.md)|  | 

### Return type

[**Book**](Book.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## updateArchived

> Number updateArchived(bookId)



### Example

```javascript
import OpenApiSpecificationMauro from 'open_api_specification_mauro';
let defaultClient = OpenApiSpecificationMauro.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationMauro.BookApi();
let bookId = 789; // Number | 
apiInstance.updateArchived(bookId, (error, data, response) => {
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
 **bookId** | **Number**|  | 

### Return type

**Number**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## updateShareable

> Number updateShareable(bookId)



### Example

```javascript
import OpenApiSpecificationMauro from 'open_api_specification_mauro';
let defaultClient = OpenApiSpecificationMauro.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationMauro.BookApi();
let bookId = 789; // Number | 
apiInstance.updateShareable(bookId, (error, data, response) => {
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
 **bookId** | **Number**|  | 

### Return type

**Number**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## uplodadCoverPicture

> Object uplodadCoverPicture(bookId, file)



### Example

```javascript
import OpenApiSpecificationMauro from 'open_api_specification_mauro';
let defaultClient = OpenApiSpecificationMauro.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationMauro.BookApi();
let bookId = 789; // Number | 
let file = "/path/to/file"; // File | 
apiInstance.uplodadCoverPicture(bookId, file, (error, data, response) => {
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
 **bookId** | **Number**|  | 
 **file** | **File**|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: */*

