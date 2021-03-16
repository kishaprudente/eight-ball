import Loader from 'react-loader-spinner';

const Result = ({ error, result, loading }) => {
	return (
		<div>
			{error ? (
				<p>{error}</p>
			) : (
				<span>
					{loading ? (
						<Loader type='ThreeDots' color='#00BFFF' height={60} width={60} />
					) : (
						<p>{result}</p>
					)}
				</span>
			)}
		</div>
	);
};

export default Result;
