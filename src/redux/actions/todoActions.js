import { getWeather } from '../../services/weatherService';

export const addTask = (task) => (dispatch) => {
  dispatch({ type: 'ADD_TASK_START' });
  try {
    dispatch({ type: 'ADD_TASK_SUCCESS', payload: task });
  } catch (error) {
    dispatch({ type: 'ADD_TASK_FAILURE', payload: error.message });
  }
};

export const deleteTask = (taskId) => ({
  type: 'DELETE_TASK',
  payload: taskId
});

export const fetchWeather = (taskId, location) => async (dispatch) => {
  try {
    const weatherData = await getWeather(location);
    console.log("This is data",weatherData);
    dispatch({
      type: 'UPDATE_WEATHER',
      payload: {
        taskId,
        weather: {
          temp: weatherData.temp,
          description: weatherData.description,
          icon: weatherData.icon
        }
        // weather: {
        //   temp: weatherData.main.temp,
        //   description: weatherData.weather[0].description,
        //   icon: weatherData.weather[0].icon
        // }
      }
    });
  } catch (error) {
    console.error('Failed to fetch weather:', error);
  }
};