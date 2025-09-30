import pandas as pd

# Load dataset with multi-index header
data = pd.read_csv("/content/dataset", header=[0, 1])
print(data.head())
import pandas as pd

# Read dataset correctly
data = pd.read_csv("/content/dataset", sep="|")

# Remove extra spaces in column names
data.columns = data.columns.str.strip()

print(data.columns)
print(data.head())
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
from sklearn.linear_model import LinearRegression

model = LinearRegression()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

print("Predicted Prices: ", y_pred[:5])
print("Actual Prices: ", list(y_test[:5]))
from sklearn.metrics import mean_squared_error, r2_score

mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print("Mean Squared Error:", mse)
print("R² Score:", r2)
# Example: Predict price for 2000 sqft, 3 bedrooms, 2 bathrooms
new_house = [[2000, 3, 2]]
predicted_price = model.predict(new_house)
print("Predicted Price:", predicted_price[0])
import matplotlib.pyplot as plt

plt.scatter(y_test, y_pred, color='blue')
plt.xlabel("Actual Prices")
plt.ylabel("Predicted Prices")
plt.title("Actual vs Predicted House Prices")
plt.show()
