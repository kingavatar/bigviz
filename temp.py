import pyspark
import pandas as pd

conf = pyspark.SparkConf().set("spark.shuffle.service.enabled", "false").set("spark.dynamicAllocation.enabled", "false").setMaster('spark://EMPEROR:7077').setAppName("Big Data Visualization").set("spark.executor.memory", "9GB").set("spark.sql.execution.arrow.pyspark.enabled", "true")
# .set("spark.cores.max", "2").
sc = pyspark.SparkContext()
sc.setLogLevel('ERROR')
sql = pyspark.SQLContext(sc)
df = sql.read.csv("./feb03.csv", header = True)
# pdf = df.limit(10).toPandas()
# print(df.describe())
df.show(n=5, truncate=False, vertical=True)