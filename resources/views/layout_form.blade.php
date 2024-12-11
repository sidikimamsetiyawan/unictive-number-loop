@extends('layout')

@section('title', 'Enhanced Number Range Form')

@section('content')
<div class="container">
    <h1>Number Range Generator</h1>
    <!-- Rules for the form -->
    <p class="rules">
        <strong>Rules:</strong><br>
        - Enter a range of numbers (Start and End).<br>
        - For every number divisible by 4, the number will be replaced with <strong>Unictive</strong>.<br>
        - For numbers divisible by both 14 and 4, the number will be replaced with <strong>Unictive Media</strong>.
    </p>

    <!-- The form -->
    <form id="numberForm">
        <label for="start">Start Number:</label>
        <input type="number" id="start" name="start" value="1" required>

        <label for="end">End Number:</label>
        <input type="number" id="end" name="end" value="30" required>

        <button type="submit">Generate</button>
    </form>

    <h2>Result:</h2>
    <ul id="result"></ul>
</div>
@endsection
