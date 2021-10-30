

describe("toEqual", () => {
   test("why not tobe", () => {
       let x=2;
       expect(x).toEqual(2);
       expect( {} ).toEqual( {} );
       expect( [] ).toEqual( [] );
       expect( { a: 1, b: 2 } ).toEqual( { a:1 , b:2 } );
       expect( [ 1, 2, 3 ] ).toEqual( [ 1, 2, 3 ] );
       expect( { a: 1, b: { c: 1, d: 2 }} ).toEqual( { a: 1, b: { c: 1, d: 2 }} );
       expect( [ 1, 2, [ 1, 2 ] ] ).toEqual( [ 1, 2, [ 1, 2 ]  ] );

       expect( { a: 1, b: { c: 1, d: 2 }} ).toEqual( { a: 1, b: { e: 1, d: 2 }} );
       expect( [ 1, 2, [ 1, 3] ] ).toEqual( [ 1, 2, [ 1, 2]  ] );
   });
});