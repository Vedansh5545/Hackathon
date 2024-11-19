import os
import requests

def get_product_recommendations(device, budget, ram, storage):
    headers = {
        'Authorization': f'Bearer {os.getenv("OPENAI_API_KEY")}',
        'Content-Type': 'application/json',
    }

    data = {
        "prompt": f"Generate a list of tech products for a {device} with a budget of {budget}, {ram} GB RAM, and {storage} GB storage.",
        "max_tokens": 150
    }

    response = requests.post('https://api.openai.com/v1/engines/davinci-codex/completions', headers=headers, json=data)
    return response.json()

# Example usage within your Django or Flask route
@app.route('/api/recommend', methods=['POST'])
def recommend_products():
    content = request.json
    recommendations = get_product_recommendations(content['device'], content['budget'], content['ram'], content['storage'])
    return jsonify(recommendations)
