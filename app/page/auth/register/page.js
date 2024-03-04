import Link from "next/link";
export default function Register(){
    return(
        <section className="lg:flex lg:h-screen font-poppins flex flex-col mx-auto">
        <div class="relative z-10 flex justify-center h-screen">
          <div class="absolute top-0 bottom-0 left-0 w-full h-full bg-gray-50 lg:bottom-0 lg:h-auto lg:w-full">
            <div class="absolute inset-0 lg:bg-[#00000066]"></div>
            <img src="https://images.pexels.com/photos/977213/pexels-photo-977213.jpeg?cs=srgb&dl=pexels-l%C3%AA-minh-977213.jpg&fm=jpg&_gl=1*df8dsv*_ga*NjU5NTUyNzA2LjE3MDkwMDI0MDQ.*_ga_8JE65Q40S6*MTcwOTAwMjQwNS4xLjAuMTcwOTAwMjQwNS4wLjAuMA.." alt="" class="hidden object-cover w-full h-full lg:block" />
          </div>
          <div class="flex items-center justify-center">
            <div class="relative max-w-6xl px-4 mx-auto">
              <div class="max-w-xl mx-auto lg:max-w-5xl">
                <div class="flex flex-wrap items-center">
                  <div class="w-full px-4">
                    <div class="p-6 shadow-md lg:p-9 bg-gray-50 rounded-xl">
                      <h2 class="mb-4 text-xl font-bold lg:mb-8 lg:text-3xl text-gray-700">Register an account</h2>
                      <form action="" class="p-0 m-0">
                        <div>
                          <label for="" class="text-lg font-medium text-gray-700">Email:</label>
                          <input type="email" class="w-full px-4 py-3 mt-3 bg-gray-200 rounded-lg text-gray-700" name="" placeholder="Enter your email" />
                        </div>
                        <div class="mt-5">
                          <div>
                            <label for="" class="text-lg font-medium text-gray-700">Password:</label>
                            <div class="relative flex items-center mt-2">
                              <input type="password" class="w-full px-4 py-3 bg-gray-200 rounded-lg text-gray-700" name="" placeholder="Enter password" />
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="absolute right-0 mr-3 bi bi-eye-slash text-gray-700" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div class="mt-5">
                          <div>
                            <label for="" class="text-lg font-medium text-gray-700">Confirm Password:</label>
                            <div class="relative flex items-center mt-2">
                              <input type="password" class="w-full px-4 py-3 bg-gray-200 rounded-lg text-gray-700" name="" placeholder="Enter password" />
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="absolute right-0 mr-3 bi bi-eye-slash text-gray-700" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div class="flex mt-3 justify-start">
                          <div class="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="" />
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="terms" class="font-light text-gray-500">I accept the <a class="font-medium text-blue-600 hover:underline" href="#">Terms and Conditions</a></label>
                          </div>
                        </div>
                        <button class="w-full px-4 py-3 mt-5 font-semibold text-gray-200 bg-blue-500 rounded-lg hover:text-blue-200" type="submit">REGISTER</button>
                        <div class="flex flex-wrap items-center mt-3 text-sm text-gray-700 lg:text-base lg:mt-5">
                          Already have an account?
                          <a href="/page/auth/login" class="ml-2 text-base font-semibold text-blue-700">Login Here</a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    );
}