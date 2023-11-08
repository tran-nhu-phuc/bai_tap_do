
// CRUD:
// C : create
// R : read
// U : update
// D : delete
// for:nên sử dụng nhiều, tốc độ nhanh và có thể lấy ra value và index.
// for in:có thể lấy ra value và index.
// for of:chỉ có thể lấy value.
//  array có thể lưu bất kỳ giá rị nào cũng ok;
// phương thức của array;
// push: đẩy giá trị mới lên array/ thay đổi trực tiếp mảng mới
// join(): Chuyển đổi số thành string và nối chúng với nhau
// ví dụ: [1,2,3].join("+")-> [1+2+3]
// mặc định là dấu ","
// reverse(): Đảo ngược mảng
// sort(): Sắp xếp từ cao đến thấp theo giá trị unicode
// concat(): nối mảng / không thay mảng cũ tạo ra mảng mới.
// pop():xóa value cuối cùng của mảng thay đổi trực tiếp trên mảng
// shift():xóa value đầu mảng thay đổi giá trị trực tiếp trên mảng và lấy nó ra.
// unshift():thêm phầm tử vào đầu mảng thay đổi trực tiếp trên mảng
// toString():chuyển đổi thành String không ảnh hưởng tới mảng chính
// splice():thay thế value/hoặc chèn thêm vào. Nó sẽ thay đổi trực tiếp giá trị trong array.Dùng để update
// tham trị : num,string,booleen. Tham trị là các kiểu dữ liệu kích thước nhỏ, size cố định giá trị lưu trực tiếp trên bộ nhớ Stack.
// tham chiếu : array,object,class.Tham chiếu là kiểu chỉ lưu địa chỉ trên stack và giá trị lưu trên heap.
// Cả 2 loại bộ nhớ này đều được lưu trên RAM, nó chỉ là khác vùng thôi. Một bên là cấp phát tĩnh 1 bên là cấp phát động.
/**
 * Kiểu tham chiếu được dùng để lưu một giá trị tham chiếu (địa chỉ ô nhớ) của một đối tượng nhưng không lưu trữ đối tượng đó.

Bởi vì kiểu tham chiếu chỉ lưu địa chỉ của ô nhớ của biến thay vì lưu giá trị của biến, nên khi gán một biến tham chiếu cho một biến khác thì nó không copy data mà nó chỉ copy địa chỉ tham chiếu.

Nên cả 2 biến sẽ cùng tham chiếu đến một địa chỉ giống nhau trên bộ nhớ Heap.

Điều này có nghĩa khi một biến tham chiếu không được dùng nữa, nó sẽ được đánh dấu cho Garbage collection.




Một kiểu tham trị lưu nội dung của nó trong bộ nhớ cấp phát là Stack. Khi chúng ta tạo một biến kiểu tham trị thì một vùng nhớ sẽ được cấp phát để lưu giá trị của biến một cách trực tiếp.

Nếu bạn gán nó cho một biến khác thì giá trị sẽ được copy trực tiếp và cả 2 biến sẽ làm việc độc lập.
 * 
 */
let arr = [1, 2, 3, 4, 5]
let index = []
let ar = []
let value=[]
for (let i = 0; i < arr.length; i++){
    index.push(arr[i])
    value.push(i)
    ar.push(arr[i]*2)
}
console.log(index + "<br>", value + "<br>", ar + "<br>")
for (const value of arr) {
    console.log(value)
}
let arr_1 =[1,23,4,]
let arr_2 =[1,23,4,]
let arr_3 = [1, 23, 4,]
arr_1.push()