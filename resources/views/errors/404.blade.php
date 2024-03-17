<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite(['resources/css/app.css'])
    @vite(['resources/css/fontiran.css'])
    <title>404 Error</title>
</head>
<body>
    <main class="flex justify-center items-center flex-col min-h-screen">
        <div class="w-[90%] pc:w-[50%] mx-auto">
            <img class="w-full" src="{{ Vite::asset('resources/assets/error page/404.svg') }}" alt="404 error">
        </div>
        <div class="text-center iransans-bold">
            <a class="bg-[#1c4e00] p-2 tablet:p-3 rounded-md text-white text-xs tablet:text-base pc:text-lg" href="{{ env('APP_URL')}}">بازگشت به خانه</a>
        </div>
    </main>
</body>
</html>